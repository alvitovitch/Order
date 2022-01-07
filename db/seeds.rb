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


model_user = User.create!(username: 'DemoBro', email: 'example@test.fake', password: 'veryFake')

model_server = Server.create!(server_name: 'Test Server', server_type: 1,  creator_id: User.first.id)
model_category = Category.create!(name: 'Text Channels', server_id: Server.first.id)
model_channel = Channel.create!(category_id: Category.first.id, name: 'Text Chat')
model_role = Role.create!(server_id: Server.first.id, name: 'Test Role')
model_membership = Membership.create!(server_id: Server.first.id, user_id: User.first.id, role_id: Role.first.id)