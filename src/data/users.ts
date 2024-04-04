import { IUser } from '@/interface/user';

export const users: { data: Array<IUser>; meta: any } = {
  data: [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '(555) 555-5555',
      address: '123 Main Street, Anytown, CA 12345',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '(123) 456-7890',
      address: '456 Elm Street, Anytown, NY 54321',
    },
    {
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com',
      phoneNumber: '(789) 012-3456',
      address: '789 Oak Street, Anytown, TX 78901',
    },
    {
      firstName: 'Sarah',
      lastName: 'Jones',
      email: 'sarah.jones@example.com',
      phoneNumber: '(234) 567-8901',
      address: '234 Maple Street, Anytown, FL 32109',
    },
    {
      firstName: 'David',
      lastName: 'Miller',
      email: 'david.miller@example.com',
      phoneNumber: '(987) 654-3210',
      address: '987 Birch Street, Anytown, IL 60601',
    },
    {
      firstName: 'Lisa',
      lastName: 'Garcia',
      email: 'lisa.garcia@example.com',
      phoneNumber: '(456) 789-0123',
      address: '456 Poplar Street, Anytown, PA 15217',
    },
    {
      firstName: 'Matthew',
      lastName: 'Rodriguez',
      email: 'matthew.rodriguez@example.com',
      phoneNumber: '(852) 963-2587',
      address: '852 Pine Street, Anytown, OH 43219',
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilson',
      email: 'jennifer.wilson@example.com',
      phoneNumber: '(321) 098-7654',
      address: '321 Spruce Street, Anytown, VA 23340',
    },
    {
      firstName: 'Andrew',
      lastName: 'Young',
      email: 'andrew.young@example.com',
      phoneNumber: '(654) 321-9870',
      address: '654 Cedar Street, Anytown, SC 29406',
    },
    {
      firstName: 'Emily',
      lastName: 'Allen',
      email: 'emily.allen@example.com',
      phoneNumber: '(789) 456-1230',
      address: '789 Willow Street, Anytown, NC 27709',
    },
  ],
  meta: {
    total: 100,
    currentPage: 1,
    nextPage: 2,
  },
};
