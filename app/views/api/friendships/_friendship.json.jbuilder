
json.extract! friendship, :id, :user_id, :friend_id
json.mutual friendship.is_mutual?