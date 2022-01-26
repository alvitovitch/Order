json.partial! 'api/servers/server', server: @server
json.roles do
    @server.roles.each do |role|
        json.set! role.id do
            json.extract! role, :id, :name
        end
    end
end
json.members do
    @server.members.each do |member|
        json.set! member.id do
            json.extract! member, :id, :username
            json.role member.role.where(server_id: @server.id)[0].name
        end
    end
end