<?php namespace App\Entity\UserManagement;

use Doctrine\ORM\Mapping as ORM;
use Vankosoft\UsersBundle\Model\User as BaseUser;

/**
 * @ORM\Entity
 * @ORM\Table(name="VSUM_Users")
 */
class User extends BaseUser
{
    /**
     * {@inheritDoc}
     */
    public function getRoles()
    {
        return $this->getRolesFromArray();
        
        /* EXAMPLE To Use RoleCollection */
        //return $this->getRolesFromCollection();
    }
}
