<?php namespace App\Entity\UserManagement;

use Doctrine\ORM\Mapping as ORM;
use VS\UsersBundle\Model\UserNotification as BaseModel;

/**
 * @ORM\Entity
 * @ORM\Table(name="VSUM_UsersNotifications")
 */
class UserNotification extends BaseModel
{
    
}
