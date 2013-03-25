class NotificationsMailer < ActionMailer::Base
  
  def new_message(message)
    @message = message
    mail(to: "adpa@interia.eu", subject: "#{message.subject}", from: "#{message.email}")
  end
end
