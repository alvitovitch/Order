class RenameType < ActiveRecord::Migration[6.1]
  def change
    rename_column :servers, :type, :server_type
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
