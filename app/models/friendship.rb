class Friendship < ApplicationRecord

    validates :user_id, :friend_id, presence: true
    validates :friend_id, uniqueness: {scope: :user_id, message: 
    "You can't friend the same person twice!"}

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
    
    belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User

    def is_mutual?
        self.friend.friends.include?(self.user)
    end


end