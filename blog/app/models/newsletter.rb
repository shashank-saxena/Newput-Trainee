class Newsletter < ActiveRecord::Base
	
	validates :username, 
          	:presence => {:message => "can't be blank." },
          	:uniqueness => {:message => "Title already exists."},
          	:length => { :maximum => 100, :message => "Must be less than 100 characters"}
	
	validates :email, 
	  :presence => {:message => "cant be blank",
	  	:if => Proc.new {|c| c.email.blank?}
	  },
  :format => { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, 
		:message => "is invalid",
		:unless => Proc.new { |a| a.email.blank?}
  }
	 

end