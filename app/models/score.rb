class Score < ActiveRecord::Base
  before_create :set_default_score
  after_save :refresh_hipster_status

  
  def refresh_hipster_status
    if self.value == 20
      "The Ultimate Hipster. People probably havent heard of you."
    elsif self.value >= 15 && self.value < 20
      "You are a hipster."
    elsif self.value >= 10 && self.value < 15
      "You have hipster tendencies, but not enough to move to Brooklyn."
    elsif self.value >= 4 && self.value < 10
      "Not a hipster."
    elsif self.value < 4
      "The Anti-Hipster"
    end
  end

  private
  
  def set_default_score
    self.value = 0
  end
end
