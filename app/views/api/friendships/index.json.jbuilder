json.outgoing_friendships @friendships.each do |friendship|
    json.set! friendship.id do
        json.partial! 'api/friendships/friendship', friendship: friendship
    end
end

json.pending @pending.each do |pending|
    if !pending.is_mutual?
            json.partial! 'api/friendships/friendship', friendship: pending
    end
end