CREATE TABLE `newsletter_subscribers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`subscribedAt` timestamp NOT NULL DEFAULT (now()),
	`isActive` enum('active','unsubscribed') NOT NULL DEFAULT 'active',
	CONSTRAINT `newsletter_subscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletter_subscribers_email_unique` UNIQUE(`email`)
);
