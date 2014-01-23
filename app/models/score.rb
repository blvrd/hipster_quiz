class Score < ActiveRecord::Base
  before_create :set_default_score

  private

  def set_default_score
    self.value = 0
  end
end
