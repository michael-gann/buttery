"""create_users_table

Revision ID: aecb60313a5c
Revises:
Create Date: 2021-01-06 10:01:46.087895

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aecb60313a5c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('first_name', sa.String(
                        length=30), nullable=False),
                    sa.Column('last_name', sa.String(
                        length=30), nullable=False),
                    sa.Column('email', sa.String(length=255), nullable=False),
                    sa.Column('hashed_password', sa.String(
                        length=255), nullable=False),
                    sa.Column('created_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=True),
                    sa.Column('updated_at', sa.DateTime(),
                              server_default=sa.text('now()'), nullable=True),
                    sa.PrimaryKeyConstraint('id'),
                    sa.UniqueConstraint('email')
                    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    # ### end Alembic commands ###
