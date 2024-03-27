import { QuickLinkProps } from '@/components/home/quicklink';
import vehicle from '@/assets/quicklinks/vehicles.png';
import customer from '@/assets/quicklinks/customers.png';
import technician from '@/assets/quicklinks/technicians.png';
import invoice from '@/assets/quicklinks/invoice.png';
import inspection from '@/assets/quicklinks/inspection.png';
import estimate from '@/assets/quicklinks/estimates.png';

export const quicklink: Array<QuickLinkProps> = [
  {
    name: 'Vehicles',
    description: 'Manage all vehicles registered in the system.',
    image: vehicle,
    path: '/vehicles',
  },
  {
    name: 'Customers',
    description: 'Access and update user profiles and preferences.',
    image: customer,
    path: '/customers',
  },
  {
    name: 'Technicians',
    description: 'View and assign tasks to technicians',
    image: technician,
    path: '/technicians',
  },
  {
    name: 'Invoice',
    description: 'Create and manage service invoices effortlessly.',
    image: invoice,
    path: '/invoices',
  },
  {
    name: 'Inspection Reports',
    description: 'Track vehicle inspections and generate reports.',
    image: inspection,
    path: '/inspections',
  },
  {
    name: 'Estimates',
    description: 'Generate service estimates for customers.',
    image: estimate,
    path: '/estimates',
  },
];
