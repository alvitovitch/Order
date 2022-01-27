class User < ApplicationRecord

    attr_reader :password
    validates :username, :session_token, :password_digest, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: /\w+@\w+\.\w+/, message: "must be a valid email address!" }
    validates :password, length: { minimum: 6, maximum: 32, allow_nil: true}

    after_initialize :ensure_session_token!, :ensure_tag!, :ensure_avatar!

    #FIGVAPER

    has_many :memberships,
    foreign_key: :user_id,
    class_name: :Membership

    has_many :role, 
    through: :memberships

    has_many :servers,
    through: :memberships

    has_many :messages,
    foreign_key: :author_id,
    class_name: :Message

    has_many :friendships,
    foreign_key: :user_id,
    class_name: :Friendship,
    dependent: :destroy

    has_many :received_friendships,
    foreign_key: :friend_id,
    class_name: :Friendship,
    dependent: :destroy

    has_many :friends,
    through: :friendships
    


    def self.find_by_credentials(identifier, password)

        user = User.find_by(username: identifier)
        if !user
            user = User.find_by(email: identifier)
        end
    
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
