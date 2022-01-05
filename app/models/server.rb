class Server < ApplicationRecord
    
    validates :server_name, :server_avatar, :creator_id, :type, presence: true


end
