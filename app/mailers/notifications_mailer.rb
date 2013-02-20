class NotificationsMailer < ActionMailer::Base
  
  def new_message(message)
    @message = message
    mail(to: "patryk@doppiojp.co.uk", subject: "New message from #{message.name}", from: "#{message.email}")
  end
end
