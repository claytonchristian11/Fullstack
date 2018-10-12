class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_name, null:false
      t.string :album_id, null:false
    end
      add_index :songs, :album_id
  end
end
