<?php namespace App\Entity\UserManagement;

use Doctrine\ORM\Mapping as ORM;
use Vankosoft\UsersBundle\Model\User as BaseUser;
use Vankosoft\UsersBundle\Model\Traits\AccessTokenEntity;
use Vankosoft\UsersBundle\Model\Interfaces\AccessTokenInterface;

#[ORM\Entity]
#[ORM\Table(name: "VSUM_Users")]
class User extends BaseUser implements AccessTokenInterface
{
    use AccessTokenEntity;
    
    /**
     * {@inheritDoc}
     */
    public function getRoles(): array
    {
        /* Use RolesArray ( OLD WAY )*/
        //return $this->getRolesFromArray();
        
        /* Use RolesCollection */
        return $this->getRolesFromCollection();
    }
}
