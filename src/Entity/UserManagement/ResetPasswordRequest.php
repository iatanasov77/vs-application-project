<?php namespace App\Entity\UserManagement;

use Doctrine\ORM\Mapping as ORM;
use VS\UsersBundle\Model\ResetPasswordRequest as BaseResetPasswordRequest;

/**
 * @ORM\Entity(repositoryClass="VS\UsersBundle\Repository\ResetPasswordRequestRepository")
 * @ORM\Table(name="VSUM_ResetPasswordRequests")
 */
class ResetPasswordRequest extends BaseResetPasswordRequest
{
    
}