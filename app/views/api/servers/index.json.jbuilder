@servers.each do |server|
    json.set! server.id do
        json.partial! 'api/servers/server', server: server
        if server.server_type == 0
            json.channel server.channels[0]
        end
    end
end