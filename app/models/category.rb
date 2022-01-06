class Category < ApplicationRecord

    validates :name, :server_id, presence: true

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

    has_many :channels,
    foreign_key: :category_id,
    class_name: :Channel,
    dependent: :destroy

end
