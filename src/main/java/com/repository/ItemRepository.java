package com.repository;

import com.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


//public interface ItemRepository extends JpaRepository<Item, Integer> {
public interface ItemRepository extends CrudRepository<Item, Integer> {

}
