class Membership < ApplicationRecord

    validates :server_id, :user_id, :role_id, presence: true
    validates :user_id, uniqueness: { scope: :server_id}

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

    belongs_to :member,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :role,
    foreign_key: :role_id,
    class_name: :Role

end
