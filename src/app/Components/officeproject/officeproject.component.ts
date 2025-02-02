import { Component } from '@angular/core';

@Component({
  selector: 'app-officeproject',
  standalone: true,
  imports: [],
  templateUrl: './officeproject.component.html',
  styleUrl: './officeproject.component.css'
})
export class OfficeprojectComponent {
  projects = [
    {
      title: 'Regional Centralized Warehouse',
      description: 'A system developed for a plantation in Sri Lanka to manage inventory, goods purchase, and issue based on purchase requisitions according to the estate.',
      technologies: 'C# .NET, Inform Application',
      features: [
        'Manage inventory system',
        'Goods purchase and issue based on purchase requisitions',
        'Centralized warehouse management'
      ]
    },
    // Add other projects here in the same format
    {
      title: 'Timber Management System',
      description: 'A system to track timber inventory, manage sales and transactions, calculate tree values, and generate reports.',
      technologies: 'C# .NET WinForms',
      features: [
        'Track tree details and growth rates',
        'Manage sales and transactions with invoicing',
        'Calculate tree values and potential profits',
        'Generate reports and analytics'
      ]
    },
    {
      title: 'Tea Export System and Warehouse System',
      description: 'A system developed for a plantation in Sri Lanka to auction tea, create blends, and export blends according to sales orders.',
      technologies: 'C# .NET, Winform Application',
      features: [
        'Auction tea and create blends',
        'Export blends according to sales orders',
        'Warehouse management'
      ]
    },
    {
      title: 'Budget Module',
      description: 'A module developed for a plantation to calculate profit and loss, covering payroll, crop and yield budgeting, and labor/material management.',
      technologies: 'C# .NET',
      features: [
        'Calculate profit and loss',
        'Payroll budgeting',
        'Crop and yield budgeting',
        'Labor and material budgeting'
      ]
    }
  ];
}