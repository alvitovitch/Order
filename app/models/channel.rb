class Channel < ApplicationRecord

    validates :name, :category_id, presence: true


    belongs_to :category,
    foreign_key: :category_id,
    class_name: :Category
    
    has_one :server,
    through: :category

    has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message

end
