class Following < ApplicationRecord
  validates :user_id, :playlist_id, null: false

  belongs_to :user

  belongs_to :playlist

end
