class Song < ApplicationRecord

  validates :song_name, presence: true

  validate :ensure_audio
  validate :ensure_artwork

  Aws.use_bundled_cert!
  
  has_one_attached :audio
  has_one_attached :artwork

  def ensure_artwork
    unless self.artwork.attached?
      errors[:artwork] << "song artwork file must be attached"
    end
  end

  def ensure_audio
    unless self.audio.attached?
      errors[:audio] << "audio file must be attached"
    end
  end

end
