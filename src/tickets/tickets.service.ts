import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Injectable()
export class TicketsService {

    private readonly tickets : Ticket[] = [
        {
            id: 1,
            subject: 'Issue with login',
            description: 'User is unable to login with correct credentials.',
            priority: 'high',
            status: 'open',
            createdAt: new Date().toISOString()
        },

        {
            id: 2,
            subject: 'Feature request: Dark mode',
            description: 'User requests a dark mode feature for the application.',
            priority: 'medium',
            status: 'open',
            createdAt: new Date().toISOString()
        },

        {
            id: 3,
            subject: 'Bug in report generation',
            description: 'User reports a bug in the report generation feature.',
            priority: 'low',
            status: 'closed',
            createdAt: new Date().toISOString()
        },

        {
            id: 4,
            subject: 'Payment gateway integration issue',
            description: 'User is facing issues with the payment gateway integration.',
            priority: 'high',
            status: 'open',
            createdAt: new Date().toISOString()
        }
    ];

    private nextTicketId = 5;

    create(createTicketDto: CreateTicketDto) {
        const ticket : Ticket = {
            id: this.nextTicketId++,
            subject: createTicketDto.subject,
            description: createTicketDto.description,
            priority: createTicketDto.priority,
            status: 'open',
            createdAt: new Date().toISOString()
        };
        this.tickets.push(ticket);
        return ticket;
    }
        
    

    findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
        let tickets = this.tickets;
        if (status) {
            tickets = tickets.filter(ticket => ticket.status === status);
        }
        if (priority) {
            tickets = tickets.filter(ticket => ticket.priority === priority);
        }
        return tickets;
    }

    findOne(id:number) {
        const ticket =  this.tickets.find(ticket => ticket.id === id);
        if (!ticket) {
            throw new NotFoundException(`Ticket with id ${id} not found`);
        }
        return ticket;
    }
}


