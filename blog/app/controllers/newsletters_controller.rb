class NewslettersController < ApplicationController
	def index
		@newsletter = Newsletter.new
	end
	def list
		@newsletters = Newsletter.all
	end
	def add
		@newsletter = Newsletter.new(newsletter_params)
		if @newsletter.save
			redirect_to url_for(:controller => :articles)
		else
			render :index
		end
	end

	def delete_subscriber
		@newsletter = Newsletter.find(params[:id])
		@newsletter.delete
		redirect_to newsletters_list_path
	end

	private
  def newsletter_params
    params.require(:newsletter).permit(:email, :username)
  end
end