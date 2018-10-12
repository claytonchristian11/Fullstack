class Song < ApplicationRecord

  validates :song_name, :album_id, presence: true

  has_one_attached :audio

end
