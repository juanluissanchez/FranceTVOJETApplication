/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel
 * avec Dario github
 */
define(['knockout', 'jquery', 'ojs/ojdatagrid', 'ojs/ojcollectiondatagriddatasource'],
 function(ko, $) {

    function DashboardViewModel() {
      var self = this;
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
      
      /* toggle button variables */
      this.stackValue = ko.observable('off');
      this.orientationValue = ko.observable('vertical');
      
      /* Data provider definition */
      //this.dataProvider = new ArrayDataProvider(JSON.parse(data), {keyAttributes: 'id'});
      self.url = 'http://localhost:3000/employees';

      self.collection = new oj.Collection(null, {
          model: new oj.Model.extend({
              idAttribute: 'id',
              urlRoot: self.url}),
          url: self.url
      });
      
      self.dataSource = new oj.CollectionDataGridDataSource(
         self.collection, {
            rowHeader: 'id',
            columns: ['FIRST_NAME', 'LAST_NAME', 'HIRE_DATE', 'SALARY']
         });      
      
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  }
);
