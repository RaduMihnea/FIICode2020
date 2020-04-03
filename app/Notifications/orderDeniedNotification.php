<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class orderDeniedNotification extends Notification
{
    use Queueable;

    public $seller_name;
    public $order_id;
    public $order_products;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($seller_name, $order_id, $order_products)
    {
        $this->seller_name = $seller_name;
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
            ->subject("Order denied")
            ->view('mail.denied', ['order_id' => $this->order_id, 'order_products' => $this->order_products, 'seller_name' => $this->seller_name] );
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
