class NotificationsMailer < ActionMailer::Base
  
  def new_message(message)
    @message = message
    mail(to: "patryk@doppiojp.co.uk", subject: "#{message.subject}", from: "#{message.email}")
  end
end
