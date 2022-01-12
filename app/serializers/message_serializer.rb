class MessageSerializer
    include FastJsonapi::ObjectSerializer
    attributes :content, :created_at
    belongs_to :channel
    belongs_to :user
  end