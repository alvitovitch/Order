class User < ApplicationRecord

    attr_reader :password
    validates :username, :session_token, :password_digest, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: /\w+@\w+\.\w+/, message: "must be a valid email address!" }
    validates :password, length: { minimum: 6, maximum: 32, allow_nil: true}

    after_initialize :ensure_session_token!, :ensure_tag!, :ensure_avatar!

    #FIGVAPER


    def self.find_by_credentials(username, password)

        user = User.find_by(username: username)
        return nil unless user
        if user.is_password?(password)
            return user
        end
        return nil

    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token!
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def ensure_tag!
        num_tag = Array.new(4) { rand(0..9) }
        self.tag ||= "##{num_tag.join('')}"
    end

    def ensure_avatar!
        # insert aws string to default profile avatar
        self.user_avatar ||= 'test string for now'
    end

    def reset_session_token!

        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token

    end
end
