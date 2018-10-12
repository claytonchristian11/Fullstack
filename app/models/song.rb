class Song < ApplicationRecord

  validates :song_name, presence: true

  validate :ensure_audio

  Aws.use_bundled_cert!
  has_one_attached :audio

  def ensure_audio
    unless self.audio.attached?
      errors[:audio] << "audio file must be attached"
    end
  end

end
