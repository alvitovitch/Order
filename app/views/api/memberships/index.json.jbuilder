@memberships.each do |membership|
    json.set! membership.id do
        json.partial! 'api/memberships/membership', membership: membership
    end
end