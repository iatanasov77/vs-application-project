<?php namespace App\Entity\UserManagement;

use Doctrine\ORM\Mapping as ORM;
use VS\UsersBundle\Model\AvatarImage as BaseAvatarImage;

/**
 * @ORM\Entity
 * @ORM\Table(name="VSUM_AvatarImage")
 */
class AvatarImage extends BaseAvatarImage
{
    
}
