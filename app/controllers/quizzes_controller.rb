class QuizzesController < ApplicationController
  def hipster
    @score = Score.new
    @score.session = cookies[:_hipster_quiz_session]
    @score.save
  end

  def score
    @score = Score.last
    @score.value += params[:score].to_i

    if @score.save
      respond_to do |format|
        format.js
      end
    end
  end
end
