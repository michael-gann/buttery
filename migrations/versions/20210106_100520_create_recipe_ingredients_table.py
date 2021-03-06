"""create_recipe_ingredients_table

Revision ID: 8f0a903d18dc
Revises: 9ecdc8f598bb
Create Date: 2021-01-06 10:05:20.710960

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8f0a903d18dc'
down_revision = '9ecdc8f598bb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('recipe_ingredients',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('recipe_id', sa.Integer(), nullable=False),
                    sa.Column('ingredient_id', sa.Integer(), nullable=False),
                    sa.Column('measurement_id', sa.Integer(), nullable=False),
                    sa.Column('quantity', sa.Float(), nullable=False),
                    sa.Column('created_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=True),
                    sa.Column('updated_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=True),
                    sa.ForeignKeyConstraint(
                        ['ingredient_id'], ['ingredients.id'], ),
                    sa.ForeignKeyConstraint(['measurement_id'], [
                                            'measurements.id'], ),
                    sa.ForeignKeyConstraint(['recipe_id'], ['recipes.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('recipe_ingredients')
    # ### end Alembic commands ###
