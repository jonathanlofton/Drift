class CreateFollowings < ActiveRecord::Migration[5.0]
  def change
    create_table :followings do |t|
      t.integer :user_id, null: false
      t.integer :playlist_id, null: false
      t.timestamps
    end

    add_index :followings, :user_id
    add_index :followings, :playlist_id
  end
end
