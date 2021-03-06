"""create_pantry_ingredients_table

Revision ID: 86c5c23bbbdb
Revises: 8f0a903d18dc
Create Date: 2021-01-06 10:05:48.030180

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '86c5c23bbbdb'
down_revision = '8f0a903d18dc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pantry_ingredients',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
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
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pantry_ingredients')
    # ### end Alembic commands ###
