CREATE TABLE tickets (
  ticket_id SERIAL PRIMARY KEY,      -- Create an auto-incrementing primary key for ticket_id
  user_id INTEGER NOT NULL,          -- User ID, references the users table
  train_id INTEGER NOT NULL,         -- Train ID
  seat_number VARCHAR(10) NOT NULL,  -- Seat number (can be a number or character)
  price DECIMAL(10, 2) NOT NULL,     -- Ticket price
  status VARCHAR(20) NOT NULL,       -- Ticket status (e.g., 'booked', 'pending', 'canceled')
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Ticket creation time
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Ticket update time
);

-- Tạo chỉ mục trên user_id và train_id để tối ưu hóa tìm kiếm
CREATE INDEX idx_tickets_user_id ON tickets(user_id);
CREATE INDEX idx_tickets_train_id ON tickets(train_id);