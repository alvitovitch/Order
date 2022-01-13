class Message < ApplicationRecord
    validates :channel_id, :author_id, :body, :reply, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :channel

    belongs_to :category,
    through: :channel

    belongs_to :server,
    through: :category


end