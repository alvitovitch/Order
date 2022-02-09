# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
Category.delete_all
Channel.delete_all
Message.delete_all
Role.delete_all
Membership.delete_all
Friendship.delete_all

admin_user = User.create!(username: 'TheCreator', email: 'mine@test.fake', password: 'veryFake')
model_user = User.create!(username: 'DemoBro', email: 'example@test.fake', password: 'veryFake')
model_user2 = User.create!(username: 'OtherBro', email: 'example2@test.fake', password: 'veryFake')
model_user3 = User.create!(username: 'MysteryMan', email: 'example3@test.fake', password: 'veryFake')

model_server = Server.create!(server_name: 'Test Server', server_type: 1,  creator_id: User.first.id)

model_category = Category.create!(name: 'Text Channels', server_id: Server.first.id)

model_channel = Channel.create!(category_id: Category.first.id, name: 'Text Chat')

model_role = Role.create!(server_id: Server.first.id, name: 'Moderator')
model_role2 = Role.create!(server_id: Server.first.id, name: 'Member')

model_membership = Membership.create!(server_id: Server.first.id, user_id: User.first.id, role_id: Role.first.id)
model_membership2 = Membership.create!(server_id: Server.first.id, user_id: User.second.id, role_id: Role.second.id)
model_membership3 = Membership.create!(server_id: Server.first.id, user_id: User.third.id, role_id: Role.second.id)
model_membership3 = Membership.create!(server_id: Server.first.id, user_id: User.fourth.id, role_id: Role.second.id)

model_friendship = Friendship.create(user_id: User.first.id, friend_id: User.second.id)
model_friendship2 = Friendship.create(user_id: User.second.id, friend_id: User.first.id)
model_friendship3 = Friendship.create(user_id: User.third.id, friend_id: User.second.id)
model_friendship3 = Friendship.create(user_id: User.fourth.id, friend_id: User.second.id)

model_friend_server = Server.create!(server_name: 'DemoBroOtherBro', server_type: 0,  creator_id: User.first.id)
model_category = Category.create!(name: 'Text Channels', server_id: Server.last.id)
model_channel = Channel.create!(category_id: Category.last.id, name: 'Text Chat')
mode_friend_role = Role.create!(server_id: Server.last.id, name: 'Friend')
mode_friend_server_membership = Membership.create(server_id: Server.last.id, role_id: Role.last.id, user_id: User.first.id)
mode_friend_server_membership = Membership.create(server_id: Server.last.id, role_id: Role.last.id, user_id: User.second.id)