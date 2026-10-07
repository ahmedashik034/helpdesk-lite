export interface Ticket {
    id: number;
    subject: string;
    description: string;
    priority : 'low' | 'medium' | 'high';
    status: 'open' | 'in-progress' | 'closed';
    createdAt: string;
}
