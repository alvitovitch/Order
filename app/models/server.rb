class Server < ApplicationRecord
    
    validates :server_name, :server_avatar, :creator_id, :server_type, presence: true

    after_initialize :ensure_avatar!

    has_many :categories,
    foreign_key: :server_id,
    class_name: :Category,
    dependent: :destroy

    has_many :channels,
    through: :categories,
    dependent: :destroy

    has_many :roles,
    foreign_key: :server_id,
    class_name: :Role

    has_many :memberships,
    foreign_key: :server_id,
    class_name: :Membership

    has_many :members,
    through: :memberships


    def ensure_avatar!
        self.server_avatar ||= 'server_avatar_string'
    end
    

end
