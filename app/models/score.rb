class Score < ActiveRecord::Base
  before_create :set_default_score
  after_save :refresh_hipster_status

  
  def refresh_hipster_status
    if self.value == 10
      "The Ultimate Hipster. People probably havent heard of you."
    elsif self.value >= 7 && self.value < 10
      "You are a hipster."
    elsif self.value >= 5 && self.value < 7
      "You have hipster tendencies, but not enough to move to Brooklyn."
    elsif self.value >= 2 && self.value < 5
      "Not a hipster."
    elsif self.value < 2
      "The Anti-Hipster"
    end
  end

  private
  
  def set_default_score
    self.value = 0
  end
end
