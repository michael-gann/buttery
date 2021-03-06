import os
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.recipe_routes import recipe_routes
from .api.pantry_routes import pantry_routes
from .api.ingredient_routes import ingredient_routes
from .api.measurement_routes import measurement_routes
from .api.categories_routes import category_routes
from .api.cooking_list_routes import cooking_list_routes

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(recipe_routes, url_prefix='/api/recipes')
app.register_blueprint(pantry_routes, url_prefix='/api/pantries')
app.register_blueprint(ingredient_routes, url_prefix='/api/ingredients')
app.register_blueprint(measurement_routes, url_prefix='/api/measurements')
app.register_blueprint(category_routes, url_prefix='/api/categories')
app.register_blueprint(cooking_list_routes, url_prefix='/api/cooking-lists')

db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get(
                            'FLASK_ENV') == 'production' else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') == 'production' else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
