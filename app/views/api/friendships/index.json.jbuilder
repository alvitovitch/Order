json.outgoing_friendships @friendships do |friendship|  
    json.partial! 'api/friendships/friendship', friendship: friendship  
end

json.pending @pending do |pending|
    if !pending.is_mutual?
            json.partial! 'api/friendships/friendship', friendship: pending
    end
end