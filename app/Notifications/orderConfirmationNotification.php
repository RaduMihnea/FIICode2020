<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class orderConfirmationNotification extends Notification
{
    use Queueable;

    public $user;
    public $order_id;
    public $order_products;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($user, $order_id, $order_products)
    {
        $this->user = $user;
        $this->order_id = $order_id;
        $this->order_products = $order_products;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject("Order confirmed")
            ->view('mail.confirmed', ['order_id' => $this->order_id, 'order_products' => $this->order_products, 'user' => $this->user] );
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
