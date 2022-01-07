class Role < ApplicationRecord

    validates :server_id, :name, presence: true
    validates :name, uniqueness: { scope: :server_id, message: 'There already is a role with that name in this server' }

    belongs_to :server,
    foreign_key: :server_id, 
    class_name: :Server

    has_many :memberships,
    foreign_key: :role_id,
    class_name: :Membership


end
